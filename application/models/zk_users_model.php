<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Zk_users_model extends CI_Model
{
    public $layout;
    function __construct()
    {
        parent::__construct();
        $this->layout = '../templates/admin_zk_master';
    }
    public function validate_user()
    {
        // set rules for the post data fields
        // username.
        $this->form_validation->set_rules('username', 'Username', 'trim|required|xss_clean|min_length[2]');
        // password.
        $this->form_validation->set_rules('password', 'Password', 'trim|required|xss_clean|min_length[3]');
        
        if ($this->form_validation->run() == FALSE)
        {
            return FALSE;
        }
        else
        {
            // post data is legit, validate form post data with stored users credentials.
            $this->db->where('username', $this->input->post('username'));
            $this->db->where('password', $this->input->post('password'));
            $query = $this->db->get('zk_users');
            return $query->result();
            
            // check if any rows were returned from the database.
            if($query->num_rows == 1)
            {
                // user was found in the database, redirect to the admin page.
                return TRUE;
            }
            else// no users were returned, no such user exists, redirect user to the login from.
            {
                // no users were returned from the database.
                echo 'Sorry, no such user exists?';
                redirect('site/login');
            }
        }
    }
    public function add_user($data)
    {
        // set rules for the post data field checks.
        // first_name.
        $this->form_validation->set_rules('first_name', 'First Name', 'trim|required|xss_clean|min_length[2]|max_length[25]|alpha');
        // last_name.
        $this->form_validation->set_rules('last_name', 'Last Name', 'trim|required|xss_clean|min_length[2]|max_length[25]|alpha');
        // username.
        $this->form_validation->set_rules('username', 'Username', 'trim|required|xss_clean');
        // email_address
        $this->form_validation->set_rules('email_address', 'Email Address', 'trim|required|xss_clean|valid_email');
        // password.
        $this->form_validation->set_rules('password', 'Password', 'trim|required|xss_clean|min_length[5]');
        // retype_password.
        $this->form_validation->set_rules('retype_password', 'Retype Password', 'trim|required|xss_clean|min_length[5]|matches[password]');
        
        if ($this->form_validation->run() == FALSE)
        {
            $data['title'] = 'Admin Page';
            $data['content'] = '../views/admin_view';
            $this->load->view($this->layout, $data);
        }
        else
        {
            // insert post data, create member.
            $this->db->insert('zk_users', $data);
            redirect('admin');
        }
    }
    public function get_user()
    {
        $query = $this->db->get('zk_users');
        
        if ($query->num_rows > 0)
        {
            foreach ($query->result() as $row)
            {
                $data[] = $row;
            }
            return $data;
        }
    }
    public function update_details()
    {
        $this->db->where('id', $this->uri->segment(3));
        $this->db->update('zk_users', $data);
    }
    public function delete_user()
    {
        $this->db->where('id', $this->uri->segment(3));
        $this->db->delete('zk_users');
    }
    
}