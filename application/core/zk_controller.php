<?php if ( ! defined ( 'BASEPATH' )) exit ( 'No direct script access allowed' );
class ZK_Controller extends CI_Controller {
    
    public $layout;
    
    public function __construct() {
        parent::__construct();
        $this->layout = '../templates/zk_master';
    }
}