package tech.fitcom.app.registration

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import tech.fitcom.app.registration.NewUser
import tech.fitcom.app.R

//create new user
val user = NewUser()

class WelcomeActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_welcome)
    }
}