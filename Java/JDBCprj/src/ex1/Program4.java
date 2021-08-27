package ex1;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;



public class Program4 {
	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		int id = 1;
		
		String url = "jdbc:oracle:thin:@localhost:1521/xe";
		String sql = "DELETE NOTICE WHERE ID=?";
		
		Class.forName("oracle.jdbc.driver.OracleDriver");
		Connection con = DriverManager.getConnection(url, "study", "study");
		PreparedStatement pst = con.prepareStatement(sql);
		
		pst.setInt(1, id);
		
		int result = pst.executeUpdate();
		System.out.println(result);
		
		pst.close();
		con.close();
		
	}
}
