<?php
/**
* 员工管理逻辑
* @copyright kingwon <kingwon680@gmail.com>
* @createtime 2014.02.27
*/

namespace Home\Logic;
use Think\Model;

class StaffLogic extends Model {

    protected $staffObj = '';
    
    public function __construct(){
        $this->staffObj = D('Staff', 'Model');
    }
    
    /**
    * 新增职员
    *
    */
    public function add(array $post){
        $this->staffObj->create($post);
        return $this->staffObj->add();
    }
    
    /**
    * 获取列表
    *
    */
    public function getList(array $args, &$page = false, $colums){
        if(false !== $page){
            $countObj = clone $this->staffObj;
            $page = new \Think\Page($countObj->count(), 10);
            $this->staffObj->page(($args['p'] ? : $page->firstRow) , $page->listRows);
        }
        $rs = $this->staffObj->select();
        return $rs;
    }
    
    public function getAllStaffIdNames($args = array()){
        $staffArr = $this->getList($args);
        $idName = array();
        if(!empty($staffArr)){
            foreach ($staffArr as $key => $value) {
                $idName[$value['staff_id']] = $value['staff_name'];
            }
        }
        return $idName;
    }
}
