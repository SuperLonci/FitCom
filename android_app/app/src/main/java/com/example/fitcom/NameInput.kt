package com.example.fitcom

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import androidx.navigation.Navigation
import com.google.android.material.textfield.TextInputLayout

class NameInput : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_name_input, container, false)
        val next = root.findViewById<Button>(R.id.next)

        next.setOnClickListener {
            val edtTextLayout = root.findViewById<TextInputLayout>(R.id.textInputName)
            if(root.findViewById<EditText>(R.id.editText_name).text.length > 10) {
                edtTextLayout.isErrorEnabled = true
                edtTextLayout.error = "Dieser Name ist ungültig."
            }
            else {
                Navigation.findNavController(root).navigate(R.id.emailInput)
            }
        }
        return root
    }
}