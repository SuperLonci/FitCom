package tech.fitcom.app.home

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.navigation.findNavController
import androidx.navigation.ui.AppBarConfiguration
import androidx.navigation.ui.setupActionBarWithNavController
import androidx.navigation.ui.setupWithNavController
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.android.material.bottomnavigation.BottomNavigationView
import kotlinx.android.synthetic.main.fragment_training.*
import tech.fitcom.app.R

class HomeActivity : AppCompatActivity() {
    //to be remove
    lateinit var trainingdays: ArrayList<TrainingplanInfo>

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home)
        supportActionBar?.title = "Trainingspläne"
        val bottomNavigationView = findViewById<BottomNavigationView>(R.id.bottom_navigation)
        val navController = findNavController(R.id.fragment)
        //switch the title in the appBar for each fragment
        val appBarConfig = AppBarConfiguration(setOf(R.id.homeFragement,R.id.trainingFragment,R.id.profileFragment))
        setupActionBarWithNavController(navController, appBarConfig)

        bottomNavigationView.setupWithNavController(navController)


    }

    override fun onResume() {
        super.onResume()

    }
}
