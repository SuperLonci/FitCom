package com.example.fitcom

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import androidx.navigation.Navigation
import kotlinx.android.synthetic.main.fragment_user_check_inputs.*

class UserCheckInputs : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_user_check_inputs, container, false)

        root.findViewById<TextView>(R.id.check_studio_id).text = user.studioID.toString()
        root.findViewById<TextView>(R.id.usr_name).text = user.username
        root.findViewById<TextView>(R.id.usr_email).text = user.useremail
        root.findViewById<TextView>(R.id.usr_gender).text = user.usergender
        root.findViewById<TextView>(R.id.usr_height).text = (user.userheight.toString() + " cm")
        root.findViewById<TextView>(R.id.usr_weight).text = (user.userweight.toString() + " kg")

        root.findViewById<Button>(R.id.btn_yes).setOnClickListener {
            // ToDo: Datenbankanfrage senden
            Navigation.findNavController(root).navigate(R.id.registrationConfirmation)
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