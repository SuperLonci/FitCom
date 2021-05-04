package tech.fitcom.app.training

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.core.view.isVisible
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.navigation.Navigation
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.ItemTouchHelper
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.R
import tech.fitcom.app.DataManager
import tech.fitcom.app.registration.user

class TrainingInputFragment : Fragment() {

    // view Model
    private lateinit var viewModel: TrainingInputViewModel

    // super ugly -> mit bindings lösen
    private var text_traininginput_title: TextView? = null
    private var text_exercise_value1: TextView? = null
    private var text_exercise_value2: TextView? = null
    private var text_exercise_value1_val: EditText? = null
    private var text_exercise_value2_val: EditText? = null

    private var btn_add_value1: Button? = null
    private var btn_sub_value1: Button? = null
    private var btn_add_value2: Button? = null
    private var btn_sub_value2: Button? = null


//    private lateinit var binding: TrainingFinishedFragmentBinding

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        //obtain instance of binding class
//        binding = DataBindingUtil.inflate(
//
//        )

        viewModel = ViewModelProvider(this).get(TrainingInputViewModel::class.java)
//        viewModel = ViewModelProviders.of(this).get(TrainingInputViewModel::class.java)

        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_traininginput, container, false)

        val rv = root.findViewById<RecyclerView>(R.id.rv_traininginput_history)

        rv.adapter = TrainingInputHistoryAdapter(requireContext(), DataManager().histories)

        rv.layoutManager = LinearLayoutManager(context)

        // Buttons to change values
        // reference to text
        text_exercise_value1_val = root.findViewById<EditText>(R.id.text_exercise_value1_val)
        // get reference to button
        btn_add_value1 = root.findViewById<Button>(R.id.btn_add_value1)
        btn_sub_value1 = root.findViewById<Button>(R.id.btn_sub_value1)

        // set on-click listener
        btn_add_value1?.setOnClickListener {
            viewModel.onAddValue1()
            updateInputs()
        }
        btn_sub_value1?.setOnClickListener {
            viewModel.onSubValue1()
            updateInputs()
        }

        text_exercise_value2_val = root.findViewById<EditText>(R.id.text_exercise_value2_val)
        // get reference to button
        btn_add_value2 = root.findViewById<Button>(R.id.btn_add_value2)
        btn_sub_value2 = root.findViewById<Button>(R.id.btn_sub_value2)

        // set on-click listener
        btn_add_value2?.setOnClickListener {
            viewModel.onAddValue2()
            updateInputs()
        }
        btn_sub_value2?.setOnClickListener {
            viewModel.onSubValue2()
            updateInputs()
        }

        text_exercise_value1 = root.findViewById<TextView>(R.id.text_exercise_value1)
        text_exercise_value2 = root.findViewById<TextView>(R.id.text_exercise_value2)

        // Next, Prev Exercise
        val btn_exercise_next = root.findViewById<Button>(R.id.btn_exercise_next)
        val btn_exercise_prev = root.findViewById<Button>(R.id.btn_exercise_prev)

        btn_exercise_next.setOnClickListener {
            viewModel.nextExercise()
            updateExercise()
        }

        btn_exercise_prev.setOnClickListener {
            viewModel.prevExercise()
            updateExercise()
        }

        // title declaration
        text_traininginput_title = root.findViewById<TextView>(R.id.text_traininginput_title)
        /*text_traininginput_title.text = viewModel.exercise.title

        text_exercise_value1.text = viewModel.exercise.value1type
        text_exercise_value2.text = viewModel.exercise.value2type

        text_exercise_value1_val.setText(viewModel.value1.toString())
        text_exercise_value2_val.setText(viewModel.value2.toString())*/

        // set initial value
        updateExercise()
        updateInputs()

        return root
    }

    private fun updateExercise(){
        text_traininginput_title?.text = viewModel.exercise.title
        // todo: update image

        text_exercise_value1_val?.setText(viewModel.exercise.value1.toString())
        text_exercise_value1?.text = viewModel.exercise.value1type

        if (viewModel.exercise.value2 == null){
            text_exercise_value2_val?.setText("")
            text_exercise_value2?.text = ""

            text_exercise_value2_val?.isVisible = false
            text_exercise_value2?.isVisible = false

            btn_add_value2?.isVisible = false
            btn_sub_value2?.isVisible = false
        } else {
            text_exercise_value2_val?.isVisible = true
            text_exercise_value2?.isVisible = true
            btn_add_value2?.isVisible = true
            btn_sub_value2?.isVisible = true

            text_exercise_value2_val?.setText(viewModel.exercise.value2.toString())
            text_exercise_value2?.text = viewModel.exercise.value2type
        }
    }

    private fun updateInputs(){
        text_exercise_value1_val?.setText(viewModel.exercise.value1.toString())
        text_exercise_value2_val?.setText(viewModel.exercise.value2.toString())
    }

    fun trainingFinished(root: View) {
        // navigate to finished screen
        Navigation.findNavController(root).navigate(R.id.TrainingFinished)
    }
}
