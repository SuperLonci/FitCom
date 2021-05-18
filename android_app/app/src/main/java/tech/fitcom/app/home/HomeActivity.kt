package tech.fitcom.app.home

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.navigation.fragment.NavHostFragment
import androidx.navigation.ui.AppBarConfiguration
import androidx.navigation.ui.setupActionBarWithNavController
import androidx.navigation.ui.setupWithNavController
import com.google.android.material.bottomnavigation.BottomNavigationView
import tech.fitcom.app.EnvironmentVariables
import tech.fitcom.app.R

class HomeActivity : AppCompatActivity() {
    //to be remove

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home)
        supportActionBar?.title = getString(R.string.string_training_plans)
        val bottomNavigationView = findViewById<BottomNavigationView>(R.id.bottom_navigation)
        val navHostFragment = supportFragmentManager.findFragmentById(R.id.fragment) as NavHostFragment
        val navController = navHostFragment.navController
        //switch the title in the appBar for each fragment
        val appBarConfig = AppBarConfiguration(setOf(R.id.homeFragement,R.id.trainingFragment,R.id.profileFragment))
        setupActionBarWithNavController(navController, appBarConfig)

        bottomNavigationView.setupWithNavController(navController)

        bottomNavigationView.setOnNavigationItemSelectedListener { item ->
            when(item.itemId) {
                R.id.homeFragement -> {
                    supportFragmentManager.beginTransaction().replace(R.id.fragment, HomeFragment()).commit()
                    true
                }
                R.id.trainingFragment -> {
                    if (EnvironmentVariables.selectedTrainingplan == null) {
                        supportFragmentManager.beginTransaction().replace(R.id.fragment, TrainingplanFragment()).commit()
                    } else {
                        supportFragmentManager.beginTransaction().replace(R.id.fragment, TrainingdayFragment()).commit()
                    }
                    true
                }
                R.id.profileFragment -> {
                    supportFragmentManager.beginTransaction().replace(R.id.fragment, ProfileFragment()).commit()
                    true
                }
                else -> false

            }
        }

    }

    override fun onResume() {
        super.onResume()

    }
}
