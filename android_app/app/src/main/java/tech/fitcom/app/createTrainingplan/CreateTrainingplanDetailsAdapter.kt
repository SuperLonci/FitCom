package tech.fitcom.app.createTrainingplan

import android.content.Context
import android.content.Intent
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.R
import tech.fitcom.app.home.TrainingdayAdapter
import tech.fitcom.app.home.TrainingdayInfo
import tech.fitcom.app.training.ExerciseData
import tech.fitcom.app.training.TrainingActivity

class CreateTrainingplanDetailsAdapter(private val context: Context, private val items: ArrayList<ExerciseData>) :
    RecyclerView.Adapter<CreateTrainingplanDetailsAdapter.ViewHolder>() {

    private val layoutInflater = LayoutInflater.from(context)

    inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView){
        val textTitle = itemView.findViewById<TextView?>(R.id.text_create_trainingsplan_details_title)

        init {
            itemView.setOnClickListener {
//                ToDo: popup Fragment to alter weights reps and sets
            }
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val itemView = layoutInflater.inflate(R.layout.exercise_detail_item, parent, false)
        return ViewHolder(itemView)
    }

    override fun getItemCount(): Int {
        return items.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = items[position]
        holder.textTitle?.text = item.title
    }

    /**
     * Function called to swap dragged items
     */
    fun swapItems(fromPosition: Int, toPosition: Int) {
        if (fromPosition < toPosition) {
            for (i in fromPosition..toPosition - 1) {
                items.set(i, items.set(i+1, items.get(i)));
            }
        } else {
            for (i in fromPosition..toPosition + 1) {
                items.set(i, items.set(i-1, items.get(i)));
            }
        }

        notifyItemMoved(fromPosition, toPosition)
    }
}