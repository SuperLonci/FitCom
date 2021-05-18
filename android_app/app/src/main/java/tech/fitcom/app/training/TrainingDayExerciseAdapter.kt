package tech.fitcom.app.training

import android.content.Context
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.R

class TrainingDayExerciseAdapter(private val context: Context, private val exercises: ArrayList<ExerciseData>) :
    RecyclerView.Adapter<TrainingDayExerciseAdapter.ViewHolder>() {

    private val layoutInflater = LayoutInflater.from(context)

    inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView){
        val textTitle = itemView.findViewById<TextView?>(R.id.text_exercise_title)

        init {
            itemView.setOnClickListener {
                var activity = itemView.context as AppCompatActivity
                var fragment = TrainingDayOverviewFragment()
                Toast.makeText(context,"Hier gibt es nichts zu klicken!", Toast.LENGTH_SHORT).show()
            }
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val itemView = layoutInflater.inflate(R.layout.exercise_item, parent, false)
        return ViewHolder(itemView)
    }

    override fun getItemCount(): Int {
        return exercises.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = exercises[position]
        holder.textTitle?.text = item.title
    }

    /**
     * Function called to swap dragged items
     */
    fun swapItems(fromPosition: Int, toPosition: Int) {
        if (fromPosition < toPosition) {
            for (i in fromPosition..toPosition - 1) {
                exercises.set(i, exercises.set(i+1, exercises.get(i)));
            }
        } else {
            for (i in fromPosition..toPosition + 1) {
                exercises.set(i, exercises.set(i-1, exercises.get(i)));
            }
        }

        notifyItemMoved(fromPosition, toPosition)
    }
}