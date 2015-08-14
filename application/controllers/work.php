<?php if ( ! defined ( 'BASEPATH' )) exit ( 'No direct script access allowed' );
class Work extends CI_Controller {
    
    public function __construct()
    {
        parent::__construct();
        $this->layout = '../templates/admin_zk_master';
        $this->is_logged_in();
    }
    
    /*
    Ensure that the users session is still active, if not redirect the user to login.
    */
    public function is_logged_in()
    {
        $is_logged_in = $this->session->userdata('is_logged_in');
        
        if (!isset($is_logged_in) || $is_logged_in != true)
        {
            redirect('site/login');
        }
    }
    
    /*
    Index method to display the add_work_view.
    */
    public function add()
    {
        $data = array(
                      'type_id' => $this->input->post('type_id'),
                      'title' => $this->input->post('title'),
                      'description' => $this->input->post('description'),
                      'author' => $this->input->post('author'),
                      'image_path' => $this->input->post('file')
                      );
        $this->Zk_work_model->add_work($data);
    }
    /*
    Artwork uploader
    */
    public function upload_work()
            {
                    $data['upload_path']          = '../images/work/';
                    $data['allowed_types']        = 'gif|jpg|jpeg|png';
                    $data['max_size']             = 200;
                    $data['max_width']            = 1200;
                    $data['max_height']           = 1200;

                    $this->load->library('upload', $data);

                    if ( ! $this->upload->upload_work())
                    {
                            $error = array('error' => $this->upload->display_errors());
                            $data['title'] = 'Add More Work';
                            $data['content'] = '../views/add_work_view';
                            $this->load->view($this->layout, $error, $data);
                    }
                    else
                    {
                            $this->Zk_work_model->add_work($data);
                    }
            }

}
/* End of file work.php */
/* Location: ./application/controllers/work.php */