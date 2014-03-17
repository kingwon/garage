<?php
/**
* 维修项目管理逻辑
* @copyright kingwon <kingwon680@gmail.com>
* @createtime 2014.02.27
*/

namespace Home\Logic;
use Think\Model;

class PartsLogic extends Model {

    protected $partsObj = '';
    
    public function __construct(){
        $this->partsObj = D('Parts', 'Model');
    }
    
    /**
    * 新增维修项目
    *
    */
    public function add(array $post){
        $post['parts_create_by'] = 1;
        $post['parts_create_time'] = date('Y-m-d H:i:s');
        $this->partsObj->create($post);
        return $this->partsObj->add();
    }
    
    /**
    * 编辑维修项目
    *
    */
    public function edit(array $post){
        $post['parts_last_modify_by'] = 1;
        $post['parts_last_modify_time'] = date('Y-m-d H:i:s');
        $editRs = $this->partsObj->save($post);
        return $editRs;
    }
    
    /**
    * 保存项目
    *
    */
    public function save(array $post){
        if(empty($post['parts_id'])){
            return $this->add($post);
        }else{
            return $this->edit($post);
        }
    }
    
    /**
    * 获取维修记录列表
    *
    */
    public function getList(array $args, &$page = false, $colums){
        if(false !== $page){
            $countObj = clone $this->partsObj;
            $page = new \Think\Page($countObj->count(), 10);
            $this->partsObj->page(($args['p'] ? : $page->firstRow) , $page->listRows);
        }
        $rs = $this->partsObj->select();
        return $rs;
    }
    
    
    /**
    * 获取所有维修项目idname
    *
    */
    public function getOneById($partsId){
        return $this->partsObj->where(array('parts_id' => $partsId))->find();
    }
    
    /**
    * 获取所有维修项目idname
    *
    */
    public function getAllpartsIdNames($args = array()){
        $partsArr = $this->partsObj->where($args)->select();
        $idName = array();
        if(!empty($partsArr)){
            foreach ($partsArr as $key => $value) {
                $idName[$value['parts_id']] = $value['parts_name'];
            }
        }
        return $idName;
    }
}
