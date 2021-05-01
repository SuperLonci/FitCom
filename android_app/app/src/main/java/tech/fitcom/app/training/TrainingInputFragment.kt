package tech.fitcom.app.training

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.navigation.Navigation
import androidx.recyclerview.widget.ItemTouchHelper
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.R
import tech.fitcom.app.DataManager
import tech.fitcom.app.registration.user

class TrainingInputFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_traininginput, container, false)

        val rv = root.findViewById<RecyclerView>(R.id.rv_traininginput_history)

        rv.adapter = TrainingInputHistoryAdapter(requireContext(), DataManager().histories)

        rv.layoutManager = LinearLayoutManager(context)

        // Buttons to change values
        // reference to text
        val text_weight_val = root.findViewById<EditText>(R.id.text_exercise_weight_val)
        // get reference to button
        val btn_add_weight = root.findViewById<Button>(R.id.btn_add_weight)
        val btn_sub_weight = root.findViewById<Button>(R.id.btn_sub_weight)

        var weight_steps = 10
        var weight = 50

        // set initial value
        text_weight_val.setText(weight.toString())

        // set on-click listener
        btn_add_weight.setOnClickListener {
            weight += weight_steps
            text_weight_val.setText(weight.toString())
        }
        btn_sub_weight.setOnClickListener {
            weight -= weight_steps
            if (weight < 0) weight = 0
            text_weight_val.setText(weight.toString())
        }

        val text_rep_val = root.findViewById<EditText>(R.id.text_exercise_rep_val)
        // get reference to button
        val btn_add_rep = root.findViewById<Button>(R.id.btn_add_rep)
        val btn_sub_rep = root.findViewById<Button>(R.id.btn_sub_rep)

        var rep_steps = 1
        var reps = 10

        // set initial value
        text_rep_val.setText(reps.toString())

        // set on-click listener
        btn_add_rep.setOnClickListener {
            reps += rep_steps
            text_rep_val.setText(reps.toString())
        }
        btn_sub_rep.setOnClickListener {
            reps -= rep_steps
            if (reps < 0) reps = 0
            text_rep_val.setText(reps.toString())
        }

        return root
    }
}