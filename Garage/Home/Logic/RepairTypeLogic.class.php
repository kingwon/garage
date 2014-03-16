<?php
/**
* 维修项目管理逻辑
* @copyright kingwon <kingwon680@gmail.com>
* @createtime 2014.02.27
*/

namespace Home\Logic;
use Think\Model;

class RepairTypeLogic extends Model {

    protected $typeObj = '';
    
    public function __construct(){
        $this->typeObj = D('RepairType', 'Model');
    }
    /**
    * 新增维修项目
    *
    */
    public function add(array $post){
        $this->typeObj->create($post);
        return $this->typeObj->add();
    }
    
    /**
    * 获取维修记录列表
    *
    */
    public function getList(array $args, &$page = false, $colums){
        $page['pageSize'] = 20;
        $p = 1;
        if(false !== $page){
            $this->typeObj->page($p, $page['pageSize']);
        }
        $rs = $this->typeObj->select();
        return $rs;
    }
    
    public function getAllTypeIdNames($args = array()){
        $typeArr = $this->typeObj->where($args)->select();
        $idName = array();
        if(!empty($typeArr)){
            foreach ($typeArr as $key => $value) {
                $idName[$value['type_id']] = $value['type_name'];
            }
        }
        return $idName;
    }
}
