package tech.fitcom.app.training

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import androidx.navigation.Navigation
import tech.fitcom.app.R

class TrainingFinishedFragment {
//    override fun onCreateView(
    fun onCreateView(
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

        return root
    }
}