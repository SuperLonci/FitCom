package tech.fitcom.app.home

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.android.material.card.MaterialCardView
import tech.fitcom.app.R
import java.util.ArrayList

class TrainingFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_training, container, false)

        // Recycler View definition

        // Data Manager for TrainingPlanList
        val rvTrainingplans = root.findViewById<RecyclerView>(R.id.listTrainingPlans)

        rvTrainingplans.adapter = TrainingplanAdapter(requireContext(), DataManager().trainingplans.values.toList())

        rvTrainingplans.layoutManager = LinearLayoutManager(context)


        return root
    }
}