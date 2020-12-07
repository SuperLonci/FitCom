package com.example.fitcom

import android.content.Intent
import android.os.Bundle
import android.widget.EditText
import android.widget.TextView
import com.google.android.material.bottomnavigation.BottomNavigationView
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.navigation.findNavController
import androidx.navigation.ui.AppBarConfiguration
import androidx.navigation.ui.setupActionBarWithNavController
import androidx.navigation.ui.setupWithNavController
import kotlinx.coroutines.delay
import java.util.jar.Manifest
import java.util.logging.Handler

const val EXTRA_MESSAGE = "com.example.fitcom.MESSAGE"


class MainActivity : AppCompatActivity() {
    var user_authn: Boolean = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        //Thread.sleep(10000)
            val navView: BottomNavigationView = findViewById(R.id.nav_view)

            val navController = findNavController(R.id.nav_host_fragment)
            // Passing each menu ID as a set of Ids because each
            // menu should be considered as top level destinations.
            val appBarConfiguration = AppBarConfiguration(setOf(
                R.id.navigation_home, R.id.navigation_training, R.id.navigation_profile))
            setupActionBarWithNavController(navController, appBarConfiguration)
            navView.setupWithNavController(navController)
        /*
        else {
            //Start activity for registration
            //findViewById<TextView>(R.id.loading_screen).text = "you have to sign up"
            val editText = findViewById<TextView>(R.id.loading_screen)
            val message = editText.text
            val intent = Intent(this, WelcomeActivity::class.java).apply {
                putExtra(EXTRA_MESSAGE, message)
            }
            startActivity(intent)
        }*/
    }
}