<?php if ( ! defined ( 'BASEPATH' )) exit ( 'No direct script access allowed' );
class Admin extends CI_Controller {
    
    public function __construct()
    {
        parent::__construct();
        $this->layout = '../templates/admin_zk_master';
        $this->is_logged_in();
    }
    public function is_logged_in()
    {
        $is_logged_in = $this->session->userdata('is_logged_in');
        
        if (!isset($is_logged_in) || $is_logged_in != true)
        {
            redirect('site/login');
        }
    }
    public function index()
    {   
        $data['rows'] = $this->Zk_users_model->get_user();
        
        $data['title'] = 'Admin Page';
        $data['content'] = '../views/admin_view';
        $this->load->view($this->layout, $data);
    }
    public function add_user()
    {
        $data = array(
                      'first_name' => $this->input->post('first_name'),
                      'last_name' => $this->input->post('last_name'),
                      'username' => $this->input->post('username'),
                      'email_address' => $this->input->post('email_address'),
                      'password' => $this->input->post('password'),
                      'retype_password' => $this->input->post('retype_password')
                      );
        $this->Zk_users_model->add_user($data);
    }
    public function delete()
    {
        $this->Zk_users_model->delete_user();
        $this->index();
    }
}
/* End of file admin.php */
/* Location: ./application/controllers/admin.php */