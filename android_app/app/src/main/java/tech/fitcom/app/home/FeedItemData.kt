package tech.fitcom.app.home

class FeedItemData(val homeitemId: String, val title: String, val desc: String, val picture: String){
    override fun toString(): String {
        return title
    }
}
