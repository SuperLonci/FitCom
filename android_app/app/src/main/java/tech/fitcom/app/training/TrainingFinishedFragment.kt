package tech.fitcom.app.training

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import androidx.fragment.app.Fragment
import androidx.navigation.Navigation
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.DataManager
import tech.fitcom.app.R

class TrainingFinishedFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_trainingdayoverview, container, false)

        // Button Navigation
        val next = root.findViewById<Button>(R.id.btn_trainingfinished_yes)
        next.setOnClickListener {
            Navigation.findNavController(root).navigate(R.id.TrainingInput)
//            ToDo: exit activity
        }

        val rv = root.findViewById<RecyclerView>(R.id.rv_trainingfinished_overview)

        rv.adapter = TrainingFinishedAdapter(requireContext(), DataManager().histories.toList())

        rv.layoutManager = LinearLayoutManager(context)

        return root
    }
}