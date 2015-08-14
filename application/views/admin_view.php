<section class="section2" role="section2">
    <h1>Administrators Page</h1>
    <h2>Welcome you are logged in as <span class='emphisis'><?php echo $this->session->userdata('username'); ?></span></h2>
    <div>
        <fieldset id="form">
            <h3>Create A User</h3>
            <?php
                echo form_open('admin/add_user');
                echo form_label('First Name', 'first_name');
                echo form_input('first_name', set_value('first_name'), 'placeholder="A First Name is required"', 'id=first_name');
                echo form_label('Last Name', 'last_name');
                echo form_input('last_name', set_value('last_name'), 'placeholder="A Last Name is required"', 'id=last_name');
                echo form_label('Username', 'username');
                echo form_input('username', set_value('username'), 'placeholder="A Username is required"', 'id=username');
                echo form_label('Email Address', 'email_address');
                echo form_input('email_address', set_value('email_address'), 'placeholder="A Email Address is required"', 'id=email_address');
                echo form_label('Password', 'password');
                echo form_password('password', set_value('password'), 'placeholder="A Password is required"', 'id=password');
                echo form_label('Retype Password', 'retype_password');
                echo form_password('retype_password', set_value('retype_password'), 'placeholder="Comfirming Password is required"', 'id=retype_password');
                echo form_submit('add_user', 'Create User');
                echo "<div class='errors'>";
                    echo validation_errors();
                echo "</div>";
            ?>
            <?php echo form_close(); ?>
        </fieldset>
        <div class="data">
            <h3>Admin User Accounts</h3><p>* Click on a name to delete user</p>
            <hr/>
                <?php foreach($rows as $r): ?>
                <p>Name: <?php echo anchor("admin/delete/$r->id", $r->first_name .' '. $r->last_name); ?><p>
                <p>Username: <?php echo $r->username; ?></p>
                <p>Email: <?php echo $r->email_address; ?></p>
                <hr/>
            <?php endforeach; ?>
        </div>
    </div>
</section>
