<section class="section2" role="section2">
    <h1>Edit Portfolio</h1>
    <h2>Hi <span class='emphisis'><?php echo $this->session->userdata('username'); ?></span>, Add more work to your portfolio!</h2>
    <div>
        <fieldset id="form">
            <h3>Add More Work</h3>
            <?php
                echo form_open_multipart('work/add');
                echo form_label('Select A Category', 'type_id');
                $options = array(
                                 0 => 'Graphic Design',
                                 1 => 'Illustrations',
                                 2 => 'Web Design',
                                 3 => 'Web Development',
                                 4 => 'Responsive Web Design',
                                 5 => 'Other'
                                 );
                echo form_dropdown('type_id', $options, set_value('type_id'));
                echo form_label('Title', 'title');
                echo form_input('title', set_value('title'), 'placeholder="A Project Title is required"', 'id=title');
                echo form_label('Description', 'description');
                echo form_textarea('description', set_value('description'), 'placeholder="A brief overview of your recently added project required"');
                echo form_label('Author', 'author');
                echo form_input('author', set_value('author'), 'placeholder="An author is required"', 'id=author');
                echo form_label('Upload Artwork', 'file');
                echo form_upload('file', set_value('file'));
                echo form_submit('add', 'Add Work');
                echo "<div class='errors'>";
                    echo validation_errors();
                echo "</div>";
            ?>
            <?php echo form_close(); ?>
        </fieldset>
    </div>
</section>