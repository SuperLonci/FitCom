package com.example.fitcom

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.NumberPicker
import android.widget.Toast
import androidx.core.view.get
import androidx.navigation.Navigation
import com.google.android.material.textfield.TextInputLayout
import kotlinx.android.synthetic.main.fragment_body_height_selection.*

class BodyHeightSelection : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_body_height_selection, container, false)
        val next = root.findViewById<Button>(R.id.next)
        val numberPicker = root.findViewById<NumberPicker>(R.id.hNumberPicker)
        numberPicker.minValue = 0
        numberPicker.maxValue = 220
        if(user.usergender.equals("male")) {
            numberPicker.value = 180
        }
        else {
            numberPicker.value = 166
        }
//        numberPicker.setOnValueChangedListener { picker, oldVal, newVal ->
//            val text = "Changed from $oldVal to $newVal"
//            Toast.makeText(context, text, Toast.LENGTH_SHORT).show()
//        }

        next.setOnClickListener {
            user.userheight = numberPicker.value
            Navigation.findNavController(root).navigate(R.id.bodyWeightSelection)
        }
        return root

//        return inflater.inflate(R.layout.fragment_body_height_selection, container, false)
    }
}