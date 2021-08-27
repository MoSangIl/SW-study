package ex1;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;



public class Program3 {
	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		String title = "제목2입니디";
		String content = "이것은 내용";
		String files = "File path";
		int id = 1;
		
		String url = "jdbc:oracle:thin:@localhost:1521/xe";
		String sql = "UPDATE NOTICE " + 
				"SET" + 
				"    TITLE=?," + 
				"    CONTENT=?," + 
				"    FILES=?" + 
				"WHERE ID=?";
		
		Class.forName("oracle.jdbc.driver.OracleDriver");
		Connection con = DriverManager.getConnection(url, "study", "study");
		PreparedStatement pst = con.prepareStatement(sql);
		
		pst.setString(1, title);
		pst.setString(2, content);
		pst.setString(3, files);
		pst.setInt(4, id);
		
		int result = pst.executeUpdate();
		System.out.println(result);
		
		pst.close();
		con.close();
		
	}
}
