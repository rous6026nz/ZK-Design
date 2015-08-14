<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Zk_work_model extends CI_Model
{
    public $layout;
    function __construct()
    {
        parent::__construct();
        $this->layout = '../templates/admin_zk_master';
    }
    
    function get_work()
    {
        $query = $this->db->get('zk_work');
        return $query->result();
    }
    function add_work($data)
    {
    /*
    Set the rules for the each inputs post data.
    */
    //type_id
    $this->form_validation->set_rules('type_id', 'Select A Category', 'trim|xss_clean');
    
    //title
    $this->form_validation->set_rules('title', 'Title', 'trim|required|xss_clean|min_length[3]|max_length[50]');
    
    //description
    $this->form_validation->set_rules('description', 'Description', 'trim|required|xss_clean|min_length[10]|max_length[1000]');

    //author
    $this->form_validation->set_rules('author', 'Author', 'trim|required|xss_clean|min_length[3]|max_length[50]');

    //upload artwork
    $this->form_validation->set_rules('file', 'Upload Artwork', 'trim|xss_clean');
    
    if ($this->form_validation->run() == FALSE)
        {
            $data['title'] = 'Add More Work';
            $data['content'] = '../views/add_work_view';
            $this->load->view($this->layout, $data);
        }
        else
        {
            // insert post data, create project.
            $this->db->insert('zk_work', $data);
            redirect('admin');
        }
    }
    function update_work($data)
    {
        $this->db->where();
        $this->db->update('zk_work', $data);
    }
    function delete_work()
    {
        $this->db->where('id', $this->uri->segment(3));
        $this->db->delete('zk_work');
    }
}