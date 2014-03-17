<?php
/**
* 客户管理逻辑
* @copyright kingwon <kingwon680@gmail.com>
* @createtime 2014.02.27
*/

namespace Home\Logic;
use Think\Model;

class CustomerLogic extends Model {

    protected $cusObj = '';
    
    public function __construct(){
        $this->cusObj = D('Customer', 'Model');
    }

    /**
    * 保存客户记录
    *
    */
    public function save(array $post){
        $this->cusObj->create($post);
        if(empty($post['customer_id'])){
            return $this->add($post);
        }else{
            return $this->edit($post);
        }
    }

    /**
    * 新增客户记录
    *
    */
    public function add(array $post){
        $post['customer_create_by'] = 1;
        $post['customer_create_time'] = date('Y-m-d H:i:s');
        $this->cusObj->create($post);
        return $this->cusObj->add();
    }

    /**
    * 编辑客户记录
    *
    */
    public function edit(array $post){
        $post['customer_last_modify_by'] = 1;
        $post['customer_last_modify_time'] = date('Y-m-d H:i:s');
        return $this->cusObj->save($post);
    }
    
    /**
    * 获取维修记录列表
    *
    */
    public function getList(array $args, &$page = false, $colums){
        if(false !== $page){
            $countObj = clone $this->cusObj;
            $page = new \Think\Page($countObj->count(),10);
            $this->cusObj->page(($args['p'] ? : $page->firstRow) , $page->listRows);
        }
        $rs = $this->cusObj->select();
        return $rs;
    }
}
