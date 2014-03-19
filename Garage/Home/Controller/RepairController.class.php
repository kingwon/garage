<?php
/**
* 维修管理
* @copyright kingwon <kingwon680@gmail.com>
* @createtime 2014.02.25
*/

namespace Home\Controller;
use Think\Controller;
use \Exception;
class RepairController extends Controller {
    public function index(){
        $this->show('欢迎来到强记汽修', 'utf-8');
    }
    
    public function lists(){
        $args = I();
        $list = D('Detail')->getList($args, $page);
        $this->assign('list', $list);
        $this->assign('page', $page->show());
        $this->display();
    }
    
    /**
    * 新增维修记录
    *
    */
    public function add(){
        $staff = D('Staff')->getAllStaffIdNames();
        $type = D('RepairType')->getAllTypeIdNames();
        $parts = D('Parts')->getAllpartsIdNames();
        
        $this->assign('staff', $staff);
        $this->assign('type', $type);
        $this->assign('parts', $parts);
        $this->display();
    }

    /**
    * 编辑维修记录
    *
    */
    public function edit(){
        $detailId = I('detail_id');
        $data = D('Detail')->getOneById($detailId);
        $staff = D('Staff')->getAllStaffIdNames();
        $type = D('RepairType')->getAllTypeIdNames();
        $parts = D('Parts')->getAllpartsIdNames();
        
        $this->assign('data', $data);
        $this->assign('staff', $staff);
        $this->assign('type', $type);
        $this->assign('parts', $parts);
        $this->display('add');
    }

    /**
    * 保存维修记录
    *
    */
    public function save(){
        try{
            $post = I();
            $rs = D('Detail')->save($post);
        }catch(Exception $e){
            json(true, $e->getMessage());
        }
        json(false, null, U('Repair/lists'));
    }
}