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
        echo 111;die;
        $this->display();
    }
    
    public function lists(){
        $list = D('Detail')->getList();
        // var_dump($list);
        $page = '<div class="page">
        <ul class="pagination">
            <li><span>共100页</span></li>
            <li class="active"><span>1</span></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><span>...</span></li>
            <li><a href="#">100</a></li>
            <li><a href="#">&laquo;</a></li>
            <li><a href="#">&raquo;</a></li>
        </ul>
    </div>';
        $this->assign('list', $list);
        $this->assign('page', $page);
        $this->display();
    }
    
    /**
    * 新增维修记录
    *
    */
    public function add(){
        $staff = D('Staff')->getAllStaffIdNames();
        $type = D('RepairType')->getAllTypeIdNames();
        // var_dump($staff);
        $this->assign('staff', $staff);
        $this->assign('type', $type);
        $this->display();
    }

    /**
    * 保存维修记录
    *
    */
    public function addSave(){
        try{
            $post = I();
        // var_dump($post);
            // $post = array(
            //     'customer_id' => mt_rand(1, 9),
            //     'detail_car_number' => '粤B:'. mt_rand(100, 900) . 'WW',
            //     'detail_fix_type_id' => mt_rand(1, 9),
            //     'detail_fix_charge' => mt_rand(1, 9) . '30.22',
            //     'detail_fix_staff_id' => mt_rand(1, 9),
            //     'detail_fix_time' => date('Y-h-m H:i:s', time()),
            //     'detail_fix_parts_id' => mt_rand(1, 9),
            //     'detail_fix_describe' => '李某某今天修了保险杠',
            //     'detail_create_by' => 'admin',
            //     'detail_create_time' => date('Y-h-m H:i:s', time()));
            $rs = D('Detail')->add($post);
            var_dump($rs);
            //$this->display();
        }catch(Exception $e){
            exit(json_encode(true, $e->getMessage()));
        }
    }
}