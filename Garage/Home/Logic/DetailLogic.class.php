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
    
    public function __construct(){
        $this->detailObj = D('Detail', 'Model');
    }
    
    /**
    * 新增维修记录
    *
    */
    public function add(array $post){
        $custObj = D('Customer', 'Model');
        $post['detail_create_time'] = $post['customer_create_time'] = date('Y-h-m H:i:s', time());
        $post['customer_create_by'] = $post['detail_create_by'] = 1;
        $custObj->create($post);
        $custId = $custObj->add();
        $post['customer_id'] = $custId;
        $this->detailObj->create($post);
        $detailRs = $this->detailObj->add();
        return $detailRs;
    }
    
    /**
    * 获取维修记录列表
    *
    */
    public function getList(array $args, &$page){
        $page['pageSize'] = 20;
        $p = 1;
        $rs = $this->detailObj
                ->alias('d')
                ->join('__CUSTOMER__ c ON d.customer_id = c.customer_id', 'LEFT')
                ->join('__REPAIR_TYPE__ t ON d.detail_fix_type_id = t.type_id', 'LEFT')
                ->join('__STAFF__ s ON d.detail_fix_staff_id = s.staff_id', 'LEFT')
                ->join('__PARTS__ p ON d.detail_fix_parts_id = p.parts_id', 'LEFT')
                ->field(array('d.*', 'c.customer_name, c.customer_car_number', 'c.customer_phone', 'c.customer_company', 's.staff_name'))
                ->page($p, $page['pageSize'])
                ->select();
        // echo $this->detailObj->getLastSql();
        return $rs;
    }
}
