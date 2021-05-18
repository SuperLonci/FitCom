package tech.fitcom.app.createTrainingplan

import android.content.Context
import android.content.Intent
import android.os.Build
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.*
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.R
import tech.fitcom.app.home.TrainingdayAdapter
import tech.fitcom.app.home.TrainingdayInfo
import tech.fitcom.app.home.TrophyAdapter
import tech.fitcom.app.home.TrophyItemData
import tech.fitcom.app.training.ExerciseData
import tech.fitcom.app.training.TrainingActivity
import java.util.*
import kotlin.collections.ArrayList

class CreateTrainingplanSearchAdapter(private val context: Context, private val items: ArrayList<ExerciseData>) :
    RecyclerView.Adapter<CreateTrainingplanSearchAdapter.ViewHolder>(), Filterable {

    private val layoutInflater = LayoutInflater.from(context)

    private var exerciseFilterList = ArrayList<ExerciseData>()

    inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView){
        val textTitle = itemView?.findViewById<TextView?>(R.id.rb_search_title)

        init {
            exerciseFilterList = items
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val itemView = layoutInflater.inflate(R.layout.search_item, parent, false)
        return ViewHolder(itemView)
    }

    override fun getItemCount(): Int {
        return exerciseFilterList.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = exerciseFilterList[position]
        holder.textTitle?.text = item.title
    }

    override fun getFilter(): Filter {
        return object : Filter() {
            override fun performFiltering(constraint: CharSequence?): FilterResults {
                val charSearch = constraint.toString()
                if (charSearch.isEmpty()) {
                    exerciseFilterList = items
                } else {
                    val resultList = ArrayList<ExerciseData>()
                    for (row in items) {
                        if (row.title.toLowerCase(Locale.ROOT).contains(charSearch.toLowerCase(Locale.ROOT))) {
                            resultList.add(row)
                        }
                        /*
                        if (row.primaryGroup.toLowerCase(Locale.ROOT).contains(charSearch.toLowerCase(Locale.ROOT))) {
                            if (row !in resultList){
                                resultList.add(row)
                            }
                        }
                        if (row.secondaryGroup?.toLowerCase(Locale.ROOT)?.contains(charSearch.toLowerCase(Locale.ROOT)) == true) {
                            if (row !in resultList){
                                resultList.add(row)
                            }
                        }*/
                    }
                    exerciseFilterList = resultList
                }
                val filterResults = FilterResults()
                filterResults.values = exerciseFilterList
                return filterResults
            }

            @Suppress("UNCHECKED_CAST")
            override fun publishResults(constraint: CharSequence?, results: FilterResults?) {
                exerciseFilterList = results?.values as ArrayList<ExerciseData>
                notifyDataSetChanged()
            }

        }
    }

}