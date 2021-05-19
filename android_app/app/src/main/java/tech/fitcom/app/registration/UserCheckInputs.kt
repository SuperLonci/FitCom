package tech.fitcom.app.registration

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import androidx.navigation.Navigation
import kotlinx.android.synthetic.main.fragment_user_check_inputs.*
import tech.fitcom.app.EnvironmentVariables
import tech.fitcom.app.R

class UserCheckInputs : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_user_check_inputs, container, false)

        root.findViewById<TextView>(R.id.check_studio_id).text = user.studioID.toString()
<<<<<<< Updated upstream
        root.findViewById<TextView>(R.id.usr_name).text = user.username
=======
        root.findViewById<TextView>(R.id.usr_name).text = user.userfirstname
        root.findViewById<TextView>(R.id.usr_last_name).text = user.userlastname
        root.findViewById<TextView>(R.id.usr_birth_date).text = user.userbirthdate
>>>>>>> Stashed changes
        root.findViewById<TextView>(R.id.usr_email).text = user.useremail
        root.findViewById<TextView>(R.id.usr_gender).text = user.usergender
        root.findViewById<TextView>(R.id.usr_height).text = (user.userheight.toString() + " cm")
        root.findViewById<TextView>(R.id.usr_weight).text = (user.userweight.toString() + " kg")

        root.findViewById<Button>(R.id.btn_yes).setOnClickListener {
<<<<<<< Updated upstream
=======
            val databaseUser = FitnessCenterMember("1", user.userfirstname, user.userlastname, user.userbirthdate, user.useremail, user.userweight, user.userheight, user.usergender)
            initializeUser(databaseUser, fitnessCenterMemberDao)
>>>>>>> Stashed changes
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
}