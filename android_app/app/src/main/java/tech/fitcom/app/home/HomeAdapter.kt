package tech.fitcom.app.home

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.trainingplan_item.view.*
import tech.fitcom.app.R

class HomeAdapter(private val context: Context, private val homeItems: List<HomeItemData>) :
    RecyclerView.Adapter<HomeAdapter.ViewHolder>() {

    private val layoutInflater = LayoutInflater.from(context)

    class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView){
        val textTitle = itemView.findViewById<TextView?>(R.id.text_home_item_title)
        val textDesc = itemView.findViewById<TextView?>(R.id.text_home_item_desc)
        val textPicture = itemView.findViewById<ImageView?>(R.id.img_home_item_picture)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val itemView = layoutInflater.inflate(R.layout.home_item, parent, false)
        return ViewHolder(itemView)
    }

    override fun getItemCount(): Int {
        return homeItems.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val homeItem = homeItems[position]
        holder.textTitle?.text = homeItem.title
        holder.textDesc?.text = homeItem.desc
//        holder.textPicture?.irgendwas = homeItem.picture
    }
}