package com.example.fitcom

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.NumberPicker
import android.widget.Toast
import androidx.navigation.Navigation
import kotlinx.android.synthetic.main.fragment_body_height_selection.*
import kotlinx.android.synthetic.main.fragment_body_weight_selection.*

class BodyWeightSelection : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_body_weight_selection, container, false)
        val next = root.findViewById<Button>(R.id.next)
        val numberPicker = root.findViewById<NumberPicker>(R.id.wNumberPicker)
        numberPicker.minValue = 0
        numberPicker.maxValue = 220
        numberPicker.value = 70
        numberPicker.setOnValueChangedListener { picker, oldVal, newVal ->
            val text = "Changed from $oldVal to $newVal"
            Toast.makeText(context, text, Toast.LENGTH_SHORT).show()
        }

        next.setOnClickListener {
            user.userweight = numberPicker.value
            Navigation.findNavController(root).navigate(R.id.userCheckInputs)
        }
        return root
//        return inflater.inflate(R.layout.fragment_body_weight_selection, container, false)
    }
}