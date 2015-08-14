<?php if ( ! defined ( 'BASEPATH' )) exit ( 'No direct script access allowed' );
class Site extends CI_Controller {
    
    public $layout;
    
    function __construct()
    {
        parent::__construct();
        $this->layout = '../templates/zk_master';
    }
    public function index()
    {
        $data['title'] = 'Home';
        $data['content'] = '../views/index_view';
        $this->load->view($this->layout, $data);
    }
    public function login()
    {
        // Zk_users_model auto loaded in the config/autoload.php
        $query = $this->Zk_users_model->validate_user();
        if ($query)// if the users data validated...
        {
            $data = array(
                          'username' => $this->input->post('username'),
                          'is_logged_in' => true
                          );
            $this->session->set_userdata($data);
            redirect('admin');
        }
        else
        {
            $data['title'] = 'Admin Login';
            $data['content'] = '../views/admin_login_view';
            $this->load->view($this->layout, $data);
        
        }
    }
    function logout()
    {
        $this->session->sess_destroy();
        redirect('site/login');
    }
    public function work()
    {
        $data['title'] = 'Portfolio Work';
        $data['content'] = '../views/work_view';
        $this->load->view($this->layout, $data);
    }
    public function gd_work()
    {
        $data['title'] = 'Graphic Design';
        $data['content'] = '../views/gd_work_view';
        $this->load->view($this->layout, $data);
    }
    public function web_work()
    {
        $data['title'] = 'Web Design and Development';
        $data['content'] = '../views/web_work_view';
        $this->load->view($this->layout, $data);
    }
    public function illust_work()
    {
        $data['title'] = 'Illustration';
        $data['content'] = '../views/illust_work_view';
        $this->load->view($this->layout, $data);
    }
    public function rwd_work()
    {
        $data['title'] = 'Responsive Web Design';
        $data['content'] = '../views/rwd_work_view';
        $this->load->view($this->layout, $data);
    }
    public function innovation_work()
    {
        $data['title'] = 'Design Innovation';
        $data['content'] = '../views/innovation_view';
        $this->load->view($this->layout, $data);
    }
    public function about()
    {
        $data['title'] = 'About Me';
        $data['content'] = '../views/about_view';
        $this->load->view($this->layout, $data);
    }
    public function contact()
    {
        $data['title'] = 'Contact Info';
        $data['content'] = '../views/contact_view';
        $this->load->view($this->layout, $data);
    }
    public function success()
    {
        $data['title'] = 'Email Sent';
        $data['content'] = '../views/email_success_view';
        $this->load->view($this->layout, $data);
    }
}
/* End of file site.php */
/* Location: ./application/controllers/site.php */