<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Email_model extends CI_Model
{
    public $layout;
    public function __construct()
    {
        parent::__construct();
        $this->layout = '../templates/zk_master';
    }
    
    public function validate_fields()
    {
        // set the form validation parameters.
        $this->load->library('form_validation');
        // name.
        $this->form_validation->set_rules('name', 'Name', 'trim|required|alpha|xss_clean');
        
        // email.
        $this->form_validation->set_rules('email', 'Email', 'trim|required|valid_email|xss_clean');
        
        // message.
        $this->form_validation->set_rules('message', 'Message', 'trim|required|xss_clean');
        
        // validate post data information.
        if($this->form_validation->run() == FALSE)
        {
            $data['title'] = 'Contact Info';
            $data['content'] = '../views/contact_view';
            $this->load->view($this->layout, $data);
        }
        else
        {
            $this->load->library('email');
            $this->email->set_newline("\r\n");
            $this->email->from(set_value('email'), set_value('name'));
            $this->email->to('rous6026nz@gmail.com');
            $this->email->subject('ZK Design Website Enquiry');
            $this->email->message(set_value('message'));
            $this->email->send();
            //echo $this->email->print_debugger();
            redirect('site/success');
        }
    }
}
/* End of file email_model.php */
/* Location: ./application/models/email_model.php */