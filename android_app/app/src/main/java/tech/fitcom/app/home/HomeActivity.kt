package tech.fitcom.app.home

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.FrameLayout
import androidx.fragment.app.add
import androidx.fragment.app.commit
import androidx.navigation.Navigation.findNavController
import androidx.navigation.findNavController
import androidx.navigation.ui.AppBarConfiguration
import androidx.navigation.ui.setupActionBarWithNavController
import androidx.navigation.ui.setupWithNavController
import androidx.recyclerview.widget.LinearLayoutManager
import com.google.android.material.bottomnavigation.BottomNavigationView
import kotlinx.android.synthetic.main.fragment_training.*
import kotlinx.android.synthetic.main.trainingplan_item.*
import tech.fitcom.app.R
import tech.fitcom.app.registration.EmailInput
import tech.fitcom.app.registration.NewUser
import tech.fitcom.app.registration.QRInstructions

class HomeActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home)

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

        val arrayList = ArrayList<Trainingplan_item>()

        arrayList.add(Trainingplan_item("Titel1", "Description", "SubDescription"))
        arrayList.add(Trainingplan_item("Titel2", "Description 2", "SubDescription"))
        arrayList.add(Trainingplan_item("Titel3", "Description 3", "SubDescription"))

        val TrainingplanAdapter = TrainingplanAdapter(arrayList, this)

        training_recyclerview.layoutManager = LinearLayoutManager(this)
        training_recyclerview.adapter = TrainingplanAdapter
    }
}