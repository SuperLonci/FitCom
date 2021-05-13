package tech.fitcom.app.createTrainingplan

import android.content.Context
import android.content.Intent
import android.os.Build
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.R
import tech.fitcom.app.home.TrainingdayAdapter
import tech.fitcom.app.home.TrainingdayInfo
import tech.fitcom.app.home.TrophyAdapter
import tech.fitcom.app.home.TrophyItemData
import tech.fitcom.app.training.ExerciseData
import tech.fitcom.app.training.TrainingActivity

class CreateTrainingplanSearchAdapter(private val context: Context, private val items: List<ExerciseData>) :
    RecyclerView.Adapter<CreateTrainingplanSearchAdapter.ViewHolder>() {

    private val layoutInflater = LayoutInflater.from(context)

    inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView){
        val textTitle = itemView?.findViewById<TextView?>(R.id.rb_search_title)

        init {

        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val itemView = layoutInflater.inflate(R.layout.search_item, parent, false)
        return ViewHolder(itemView)
    }

    override fun getItemCount(): Int {
        return items.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = items[position]
        holder.textTitle?.text = item.title
    }
}