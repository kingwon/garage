<?php
/**
* 客户管理
* @copyright kingwon <kingwon680@gmail.com>
* @createtime 2014.02.27
*/

namespace Home\Controller;
use Think\Controller;
use \Exception;
class CustomerController extends Controller {
    public function index(){
        $this->display();
    }
    
    public function lists(){
        $args = I();
        $list = D('Customer')->getList($args, $page);

        $this->assign('page', $page->show());
        $this->assign('list', $list);
        $this->display();
    }
    
    /**
    * 新增客户
    *
    */
    public function add(){
        $this->display();
    }

    /**
    * 保存客户
    *
    */
    public function addSave(){
        try{
            // $post = I('post');
        // var_dump(C());
            // $firstNameArr = array('李', '刘', '谢','何','徐','邓', '吴','孙','韦');
            // $lastNameArr = array('红', '华', '伦','旺','兔子','的邓', '是吴','修孙','艹韦');
            // $post = array(
            //     'customer_name' => $firstNameArr[mt_rand(0, 8)] . $lastNameArr[mt_rand(0, 8)],
            //     'customer_phone' => '15' . strval(mt_rand(100000000, 999999999)),
            //     'customer_company' => $firstNameArr[mt_rand(0, 8)] . $lastNameArr[mt_rand(0, 8)] . '的公司',
            //     'customer_gender' => mt_rand(1,2),
            //     'customer_age' => mt_rand(16, 120),
            //     'customer_create_by' => 'admin',
            //     'customer_create_time' => date('Y-h-m H:i:s', time()));
            
            $rs = D('Customer')->add($post);
            var_dump($rs);
            //$this->display();
        }catch(Exception $e){
            json(true, $e->getMessage());
        }
        json(false, null, U('Customer/lists'));
    }
}