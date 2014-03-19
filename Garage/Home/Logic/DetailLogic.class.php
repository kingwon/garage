<?php
/**
* 维修记录管理逻辑
* @copyright kingwon <kingwon680@gmail.com>
* @createtime 2014.02.25
*/

namespace Home\Logic;
use Think\Model;

class DetailLogic extends Model {

    protected $detailObj = '';
    const ADD_CUSTOMER_ERROR = 101;
    const EDIT_CUSTOMER_ERROR = 102;
    const ADD_DETAIL_ERROR = 201;
    const EDIT_DETAIL_ERROR = 202;
    
    public function __construct(){
        $this->detailObj = D('Detail', 'Model');
    }
    
    /**
    * 保存维修记录
    *
    */
    public function save(array $post){
        if(!empty($post['customer_car_number'])){
            $post['customer_car_number'] = strtoupper($post['customer_car_number']);
        }
        if(empty($post['detail_id'])){
            return $this->add($post);
        }else{
            return $this->edit($post);
        }
    }
    
    /**
    * 新增维修记录
    *
    */
    public function add(array $post){
        $custObj = D('Customer');
        $post['detail_create_time'] = $post['customer_create_time'] = date('Y-h-m H:i:s', time());
        $post['customer_create_by'] = $post['detail_create_by'] = 1;
        $custId = $custObj->add($post);
        if(false === $custId){
            throw new Exception("新增客户出错", self::ADD_CUSTOMER_ERROR);
        }
        $post['customer_id'] = $custId;
        $this->detailObj->create($post);
        $detailRs = $this->detailObj->add();
        return $detailRs;
    }
    
    /**
    * 编辑维修记录
    *
    */
    public function edit(array $post){
        $custObj = D('Customer');
        $post['detail_last_modify_time'] = $post['customer_last_modify_time'] = date('Y-h-m H:i:s', time());
        $post['customer_last_modify_by'] = $post['detail_last_modify_by'] = 1;
        if(empty($post['customer_id'])){
            $custRs= $custObj->add($post);
            $post['customer_id'] = $custRs;
        }else{
            $custRs= $custObj->edit($post);
        }
        
        if(false === $custRs){
            throw new Exception("新增客户出错", self::EDIT_CUSTOMER_ERROR);
        }
        $detailRs = $this->detailObj->save($post);
        return $detailRs;
    }
    
    
    
    /**
    * 获取维修记录列表
    *
    */
    public function getList(array $args, &$page = false){
        $p = $args['p'];
        unset($args['p']);
        $this->detailObj
            ->alias('d')
            ->join('__CUSTOMER__ c ON d.customer_id = c.customer_id', 'LEFT')
            ->join('__REPAIR_TYPE__ t ON d.detail_fix_type_id = t.type_id', 'LEFT')
            ->join('__STAFF__ s ON d.detail_fix_staff_id = s.staff_id', 'LEFT')
            ->join('__PARTS__ p ON d.detail_fix_parts_id = p.parts_id', 'LEFT')
            ->field(array('d.*', 'c.customer_name, c.customer_car_number', 'c.customer_phone', 'c.customer_company', 's.staff_name', 't.type_name'));
        if(false !== $page){
            $countObj = clone $this->detailObj;
            $page = new \Think\Page($countObj->count(), 10);// 实例化分页类 传入总记录数和每页显示的记录数
            $this->detailObj->page(($p ? : $page->firstRow) , $page->listRows);
        }
        $rs = $this->detailObj->where($args)->order('detail_id desc')->select();
        // echo $this->detailObj->getLastSql();
        return $rs;
    }
    
    /**
    * 根据id获取单条记录
    *
    */
    public function getOneById($detailId){
        if (empty($detailId)) {
            return '没有找到数据';
        }
        
        $data = $this->getList(array('detail_id' => $detailId));
        return reset($data);
    }
}
