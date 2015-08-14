<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Email extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
    }
    
    public function index()
    {   
        // check if the email post data was submitted.
        if ($this->input->post('send_email'))
        {
            // Email_model auto loaded in the config/autoload.php
            // send post data to the check valid method in the email_model.
            $this->Email_model->validate_fields();
        }
    }
}
/* End of file email.php */
/* Location: ./application/controllers/email.php */