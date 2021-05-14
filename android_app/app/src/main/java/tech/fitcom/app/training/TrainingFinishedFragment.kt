package tech.fitcom.app.training

import android.content.Intent
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
import tech.fitcom.app.home.HomeActivity

class TrainingFinishedFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_trainingfinished, container, false)

        // Button Navigation
        val btn_trainingfinished_yes = root.findViewById<Button>(R.id.btn_trainingfinished_yes)
        btn_trainingfinished_yes.setOnClickListener {
            activity?.finish()
//            ToDo: safe state
        }

        // Button Navigation
        val btn_trainingfinished_back = root.findViewById<Button>(R.id.btn_trainingfinished_back)
        btn_trainingfinished_back.setOnClickListener {
            Navigation.findNavController(root).navigate(R.id.TrainingInput)
        }

        //ToDo: add possibility to change historie Data by clicking on item


        val rv = root.findViewById<RecyclerView>(R.id.rv_trainingfinished_overview)

        rv.adapter = TrainingFinishedAdapter(requireContext(), DataManager().histories.toList())

        rv.layoutManager = LinearLayoutManager(context)

        return root
    }
}