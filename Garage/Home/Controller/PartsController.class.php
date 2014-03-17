<?php
/**
* 维修项目管理
* @copyright kingwon <kingwon680@gmail.com>
* @createtime 2014.02.25
*/

namespace Home\Controller;
use Think\Controller;
use \Exception;
class PartsController extends Controller {
    
    public function lists(){
        $args = I();
        $list = D('Parts')->getList($args, $page);
        
        $this->assign('page', $page->show());
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
        $partsId = I('parts_id');
        $data = D('Parts')->getOneById($partsId);
        
        $this->assign('data', $data);
        $this->display('add');
    }
    
    /**
    * 保存
    *
    */
    public function save(){
        $postData = I();
        try{
            $rs = D('Parts')->save($postData);
        }catch(Exception $e){
            json(true, $e->getMessage());
        }
        json(false, null, U('Parts/lists'));
    }
}