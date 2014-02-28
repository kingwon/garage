<?php
/**
* 员工管理逻辑
* @copyright kingwon <kingwon680@gmail.com>
* @createtime 2014.02.27
*/

namespace Home\Logic;
use Think\Model;

class StaffLogic extends Model {

    protected $cusObj = '';
    
    public function __construct(){
        $this->cusObj = D('Staff', 'Model');
    }
    /**
    * 新增维修记录
    *
    */
    public function add(array $post){
        $this->cusObj->create($post);
        return $this->cusObj->add();
    }
    
    /**
    * 获取维修记录列表
    *
    */
    public function getList(array $args, &$page = false, $colums){
        $page['pageSize'] = 20;
        $p = 1;
        if(false !== $page){
            $this->cusObj->page($p, $page['pageSize']);
        }
        $rs = $this->cusObj->select();
        return $rs;
    }
    
    public function
}
