package tech.fitcom.app.home

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.navigation.findNavController
import androidx.navigation.ui.AppBarConfiguration
import androidx.navigation.ui.setupActionBarWithNavController
import androidx.navigation.ui.setupWithNavController
import androidx.recyclerview.widget.LinearLayoutManager
import com.google.android.material.bottomnavigation.BottomNavigationView
import kotlinx.android.synthetic.main.fragment_training.*
import tech.fitcom.app.R

class HomeActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home)
        supportActionBar?.title = "Trainingspläne"
        val bottomNavigationView = findViewById<BottomNavigationView>(R.id.bottom_navigation)
        val navController = findNavController(R.id.fragment)
        //switch the title in the appBar for each fragment
        val appBarConfig = AppBarConfiguration(setOf(R.id.homeFragement,R.id.trainingFragment,R.id.profileFragment))
        setupActionBarWithNavController(navController, appBarConfig)

        // merge conflict - to be looked at
        /*val navController = findNavController(R.id.nav_host_fragment)
        // Passing each menu ID as a set of Ids because each
        // menu should be considered as top level destinations.
        val appBarConfiguration = AppBarConfiguration(
            setOf(
                R.id.navigation_home, R.id.navigation_training, R.id.navigation_profile
            )
        )
        setupActionBarWithNavController(navController, appBarConfiguration)
        navView.setupWithNavController(navController)*/
        bottomNavigationView.setupWithNavController(navController)


        // Recycler View configuration

        // Layout Manager for TrainingPlanList
        listTrainingPlans.layoutManager = LinearLayoutManager(this)

        listTrainingPlans.adapter = TrainingplanAdapter(this, DataManager.trainingday)


    }

    override fun onResume() {
        super.onResume()

    }
}
