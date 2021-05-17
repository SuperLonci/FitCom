package tech.fitcom.app.training

import android.graphics.Color
import android.graphics.Typeface
import android.graphics.drawable.ColorDrawable
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.*
import androidx.core.view.isVisible
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.navigation.Navigation
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.ItemTouchHelper
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.fragment_traininginput.*
import tech.fitcom.app.R
import tech.fitcom.app.DataManager
import tech.fitcom.app.registration.user

class TrainingInputFragment : Fragment() {

    // view Model
    private lateinit var viewModel: TrainingInputViewModel

    // History Adapter
    private var historyAdapter: TrainingInputHistoryAdapter? = null

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

    private var spinner_exercise_value2_steps: Spinner? = null

    // init Data Manager
    val dm = DataManager()

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


        // History Recycler View
        val rv_traininginput_history = root.findViewById<RecyclerView>(R.id.rv_traininginput_history)

        historyAdapter = TrainingInputHistoryAdapter(requireContext(), dm.histories)

        rv_traininginput_history.adapter = historyAdapter

        var linearLayoutManager = LinearLayoutManager(context)
        linearLayoutManager.reverseLayout = true
        linearLayoutManager.stackFromEnd = true

        rv_traininginput_history.layoutManager = linearLayoutManager


        // Buttons to change values
        // reference to text
        text_exercise_value1_val = root.findViewById<EditText>(R.id.text_exercise_value1_val)

        // on focus change listener to save

        text_exercise_value1_val?.onFocusChangeListener = View.OnFocusChangeListener { _, hasFocus -> if(!hasFocus){
            viewModel.setValue1(text_exercise_value1_val?.text.toString().toInt())
            updateInputs()
        } }
        text_exercise_value2_val?.onFocusChangeListener = View.OnFocusChangeListener { _, hasFocus -> if(!hasFocus){
            viewModel.setValue2(text_exercise_value2_val?.text.toString().toInt())
            updateInputs()
        } }

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
        val btn_exercise_next = root.findViewById<ImageButton>(R.id.btn_exercise_next)
        val btn_exercise_prev = root.findViewById<ImageButton>(R.id.btn_exercise_prev)

        btn_exercise_next.setOnClickListener {
            viewModel.nextExercise()
//            updateExercise()
        }

        btn_exercise_prev.setOnClickListener {
            viewModel.prevExercise()
//            updateExercise()
        }

        // Spinner
        val spinner_exercise_value1_steps = root.findViewById<Spinner>(R.id.spinner_exercise_value1_steps)
        spinner_exercise_value2_steps = root.findViewById<Spinner>(R.id.spinner_exercise_value2_steps)

        // finally, data bind spinner with adapter
        spinner_exercise_value1_steps.adapter = TrainingInputStepSpinnerAdapter(root.context, dm.steps)
        spinner_exercise_value2_steps?.adapter = TrainingInputStepSpinnerAdapter(root.context, dm.steps)

        // spinner on item selected listener
        spinner_exercise_value1_steps.onItemSelectedListener = object : AdapterView.OnItemSelectedListener {
            override fun onItemSelected(
                parent: AdapterView<*>,
                view: View,
                position: Int,
                id: Long
            ) {
                val selectedItemText = parent.getItemAtPosition(position).toString()
                viewModel.setStep1(selectedItemText.toInt())
            }
            override fun onNothingSelected(parent: AdapterView<*>?) {
                // another interface callback
            }
        }
        spinner_exercise_value2_steps?.onItemSelectedListener = object : AdapterView.OnItemSelectedListener {
            override fun onItemSelected(
                parent: AdapterView<*>,
                view: View,
                position: Int,
                id: Long
            ) {
                val selectedItemText = parent.getItemAtPosition(position).toString()
                viewModel.setStep2(selectedItemText.toInt())
            }
            override fun onNothingSelected(parent: AdapterView<*>?) {
                // another interface callback
            }
        }

        // title declaration
        text_traininginput_title = root.findViewById<TextView>(R.id.text_traininginput_title)
        /*text_traininginput_title.text = viewModel.exercise.title

        text_exercise_value1.text = viewModel.exercise.value1type
        text_exercise_value2.text = viewModel.exercise.value2type

        text_exercise_value1_val.setText(viewModel.value1.toString())
        text_exercise_value2_val.setText(viewModel.value2.toString())*/

        // safe Button
        val btn_exercise_save = root.findViewById<Button>(R.id.btn_exercise_save)
        btn_exercise_save.setOnClickListener{
            viewModel.onSafe(dm)
            updateHistory()

            // scroll history to top
            linearLayoutManager.scrollToPositionWithOffset(dm.histories.size-1,0)
        }

        viewModel.currentExercise.observe(viewLifecycleOwner, Observer { newExercise ->
//            updateExercise()
        })

        viewModel.exercise.observe(viewLifecycleOwner, Observer { newExercise ->
            updateExercise()
        })

        viewModel.eventTrainingFinished.observe(viewLifecycleOwner, Observer { hasFinished ->
            if (hasFinished) {
                Navigation.findNavController(root).navigate(R.id.TrainingFinished)
                viewModel.onTrainingFinishComplete()
            }
        })

        // set initial value
//        updateExercise()
//        updateInputs()

        return root
    }

    private fun updateExercise(){
        text_traininginput_title?.text = viewModel.exercise.value?.title
        // todo: update image

        text_exercise_value1_val?.setText(viewModel.exercise.value?.value1.toString())
        text_exercise_value1?.text = viewModel.exercise.value?.value1type

        spinner_exercise_value1_steps?.setSelection(dm.steps.indexOf(viewModel.exercise.value?.value1step.toString()))

        if (viewModel.exercise.value?.value2 == null){
            text_exercise_value2_val?.setText("")
            text_exercise_value2?.text = ""

            text_exercise_value2_val?.isVisible = false
            text_exercise_value2?.isVisible = false

            btn_add_value2?.isVisible = false
            btn_sub_value2?.isVisible = false

            spinner_exercise_value2_steps?.isVisible = false
        } else {
            text_exercise_value2_val?.isVisible = true
            text_exercise_value2?.isVisible = true
            btn_add_value2?.isVisible = true
            btn_sub_value2?.isVisible = true
            spinner_exercise_value2_steps?.isVisible = true
            spinner_exercise_value2_steps?.setSelection(dm.steps.indexOf(viewModel.exercise.value?.value2step.toString()))

            text_exercise_value2_val?.setText(viewModel.exercise.value?.value2.toString())
            text_exercise_value2?.text = viewModel.exercise.value?.value2type
        }

        if (viewModel.currentExercise.value == 0){
//            btn_exercise_prev.setImageResource(R.drawable.round_skip_previous_24)
            btn_exercise_prev.isVisible = false
        } else {
            btn_exercise_prev.isVisible = true
        }

        if (viewModel.currentExercise.value == viewModel.exercises.size - 1){
            btn_exercise_next.setImageResource(R.drawable.round_last_page_24)
        } else {
            btn_exercise_next.setImageResource(R.drawable.round_navigate_next_24)
        }
    }

    private fun updateInputs(){
        text_exercise_value1_val?.setText(viewModel.exercise.value?.value1.toString())
        text_exercise_value2_val?.setText(viewModel.exercise.value?.value2.toString())
    }

    private fun updateHistory() {
        historyAdapter?.update()
    }

    private fun trainingFinished(root: View) {
        // navigate to finished screen
        Navigation.findNavController(root).navigate(R.id.TrainingFinished)
    }
}
