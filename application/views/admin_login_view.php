<section class="section2" role="section2">
    <h1>Administrator Login</h1>
    <div id="form">
        <?php
        echo form_open('site/login');
        echo form_label('Username', 'username');
        echo form_input('username', set_value('username'), 'placeholder="Username is required"');
        echo form_label('Password', 'password');
        echo form_password('password', set_value('password'), 'placeholder="Password is required"');
        echo form_submit('admin_login', 'Login');
        echo "<div class='errors'>";
		    echo validation_errors();
		echo "</div>";
        ?>
        <?php echo form_close(); ?>
    </div>
</section>