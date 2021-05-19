package tech.fitcom.app.home

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.R

class FeedAdapter(private val context: Context, private val feedItems: MutableList<FeedItemData>) :
    RecyclerView.Adapter<FeedAdapter.ViewHolder>() {

    private val layoutInflater = LayoutInflater.from(context)

    class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView){
        val textTitle = itemView.findViewById<TextView?>(R.id.text_home_item_title)
        val textDesc = itemView.findViewById<TextView?>(R.id.text_home_item_desc)
        val textPicture = itemView?.findViewById<ImageView?>(R.id.img_home_item_picture)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val itemView = layoutInflater.inflate(R.layout.home_item, parent, false)
        return ViewHolder(itemView)
    }

    override fun getItemCount(): Int {
        return feedItems.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = feedItems[position]
        holder.textTitle?.text = item.title
        holder.textDesc?.text = item.desc
//        holder.textPicture?.irgendwas = homeItem.picture
    }

    /**
     * Function called to delete swiped items
     */
    fun deleteItem(position: Int) {
        feedItems.removeAt(position)
        notifyItemRemoved(position)
    }
}