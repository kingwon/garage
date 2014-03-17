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
        $post['type_create_by'] = 1;
        $post['type_create_time'] = date('Y-m-d H:i:s');
        $this->typeObj->create($post);
        return $this->typeObj->add();
    }
    
    /**
    * 编辑维修项目
    *
    */
    public function edit(array $post){
        $post['type_last_modify_by'] = 1;
        $post['type_last_modify_time'] = date('Y-m-d H:i:s');
        $editRs = $this->typeObj->save($post);
        return $editRs;
    }
    
    /**
    * 保存项目
    *
    */
    public function save(array $post){
        if(empty($post['type_id'])){
            return $this->add($post);
        }else{
            return $this->edit($post);
        }
    }
    
    /**
    * 获取列表
    *
    */
    public function getList(array $args, &$page = false, $colums){
        if(false !== $page){
            $countObj = clone $this->typeObj;
            $page = new \Think\Page($countObj->count(), 10);
            $this->typeObj->page(($args['p'] ? : $page->firstRow) , $page->listRows);
        }
        $rs = $this->typeObj->select();
        return $rs;
    }
    
    /**
    * 获取所有维修项目idname
    *
    */
    public function getOneById($typeId){
        return $this->typeObj->where(array('type_id' => $typeId))->find();
    }
    
    /**
    * 获取所有维修项目idname
    *
    */
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
