package tech.fitcom.app

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import tech.fitcom.app.home.HomeActivity
import tech.fitcom.app.registration.WelcomeActivity


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        //hides the action bar in the loading screen
        supportActionBar?.hide()

        //sets a timer for 3 seconds to show the logo in that time
        Handler(Looper.getMainLooper()).postDelayed({

            //constant for manual start HomeActivity or LoginActivity
            if(EnvironmentVariables.registered) {
                val intent = Intent(this@MainActivity, HomeActivity::class.java)
                startActivity(intent)
            }
            else {
                val intent = Intent(this@MainActivity, WelcomeActivity::class.java)
                startActivity(intent)
            }
            finish()
        }, 2000)
    }
}