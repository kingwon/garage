<?php
/**
* 维修项目管理
* @copyright kingwon <kingwon680@gmail.com>
* @createtime 2014.02.25
*/

namespace Home\Controller;
use Think\Controller;
use \Exception;
class TypeController extends Controller {
    
    public function lists(){
        $list = D('RepairType')->getList();
        
        $this->assign('list', $list);
        $this->display();
    }
    
    /**
    * 新增
    *
    */
    public function add(){
        $this->display();
    }

    /**
    * 编辑
    *
    */
    public function edit(){
        $this->display('add');
    }
}