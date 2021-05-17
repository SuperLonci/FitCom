package tech.fitcom.app.registration

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import androidx.navigation.Navigation
import kotlinx.coroutines.*
import tech.fitcom.app.EnvironmentVariables
import tech.fitcom.app.R
import tech.fitcom.app.database.FitComDatabase
import tech.fitcom.app.database.dao.FitnessCenterMemberDao
import tech.fitcom.app.database.entity.FitnessCenterMember

class UserCheckInputs : Fragment() {

    private var job = Job()
    private val uiScope = CoroutineScope(Dispatchers.Main + job)

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_user_check_inputs, container, false)
        val fitnessCenterMemberDao = FitComDatabase.getInstance(requireContext()).fitnessCenterMemberDao

        //val dataSource = FitComDatabase.getInstance(requireContext()).fitComDatabaseDao

        root.findViewById<TextView>(R.id.check_studio_id).text = user.studioID.toString()
        root.findViewById<TextView>(R.id.usr_name).text = user.username
        root.findViewById<TextView>(R.id.usr_email).text = user.useremail
        root.findViewById<TextView>(R.id.usr_gender).text = user.usergender
        root.findViewById<TextView>(R.id.usr_height).text = (user.userheight.toString() + " cm")
        root.findViewById<TextView>(R.id.usr_weight).text = (user.userweight.toString() + " kg")

        root.findViewById<Button>(R.id.btn_yes).setOnClickListener {
            val databaseUser = FitnessCenterMember("1", user.username,null, null, user.useremail, null, user.userweight, user.userheight, user.usergender)
            initializeUser(databaseUser, fitnessCenterMemberDao)
            // ToDo: Datenbankanfrage senden
            Navigation.findNavController(root).navigate(R.id.registrationConfirmation)

            // Die Environment Variablen müssen lokal gespeichert werden
            // Wenn erfolgreich
            EnvironmentVariables.registered = true

        }
        root.findViewById<Button>(R.id.btn_no).setOnClickListener {
            Navigation.findNavController(root).navigate(R.id.nameInput)
        }
        root.findViewById<Button>(R.id.btn_maybe).setOnClickListener {
            // ToDo: Funny Popup
        }

        return root
    }

    private fun initializeUser(fitnessCenterMember: FitnessCenterMember, fitnessCenterMemberDao: FitnessCenterMemberDao) {
        uiScope.launch {
            insertFitnessCenterMember(fitnessCenterMember, fitnessCenterMemberDao)
        }
    }

    private suspend fun insertFitnessCenterMember(fitnessCenterMember: FitnessCenterMember, fitnessCenterMemberDao: FitnessCenterMemberDao){
        return withContext(Dispatchers.IO) {
            fitnessCenterMemberDao.insertFitnessCenterMember(fitnessCenterMember)
        }
    }
}
