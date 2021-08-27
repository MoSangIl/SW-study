package com.newlecture.app.console;

import java.sql.SQLException;
import java.util.List;
import java.util.Scanner;

import com.newlecture.app.entity.Notice;
import com.newlecture.app.service.NoticeService;

public class NoticeConsole {
	
	private NoticeService service;
	private int page;
	private String searchWord;
	private String searchField;
	
	public NoticeConsole() {
		service = new NoticeService();
		page = 1;
		searchField = "TITLE";
		searchWord = "";
	}
	public void printNoticeList() throws ClassNotFoundException, SQLException {
		List<Notice> list = service.getList(page, searchField, searchWord);
		
		int count = service.getCount( searchField, searchWord);
		int lastPage = count / 10;
		
		lastPage = count % 10 == 0? lastPage: lastPage + 1;
		System.out.println("---------------------------------------");
		System.out.printf("<��������> �� %d �Խñ� \n", count);
		System.out.println("---------------------------------------");
		
		for(Notice n : list) {
			System.out.printf("%d. %s / %s / %s \n", n.getId(), n.getTitle(), n.getWriterId(), n.getRegDate());
		}
		System.out.println("---------------------------------------");
		System.out.printf("      %d/%d pages\n", page, lastPage);
	}

	public int inputNoticeMenu() {
		Scanner scan = new Scanner(System.in);
		System.out.printf("1.����ȸ/ 2.����/ 3.����/ 4.�۾���/ 5.�˻� / 6.����> ");
		String menu_ = scan.nextLine();
		int menu = Integer.parseInt(menu_);
		
		return menu;
	}
	public void movePrevList() {
		// TODO Auto-generated method stub
		if(page == 1) {
			System.out.println("================");
			System.out.println("[ ���� �������� �����ϴ�. ]");
			System.out.println("================");
			return;
		}
		
		page--;
	}
	public void moveNextList() throws ClassNotFoundException, SQLException {
		int count = service.getCount(searchField, searchWord);
		int lastPage = count / 10;
		if(page == lastPage + 1) {
			System.out.println("================");
			System.out.println("[ ���� �������� �����ϴ�. ]");
			System.out.println("================");
			return;
		}
		
		page++;
		
	}
	public void inputSearchWord() {
		Scanner scan = new Scanner(System.in);
		System.out.println("�˻� ����(title/content/writerId)�߿� �ϳ��� �Է��ϼ���");
		System.out.print(">");
		searchField = scan.nextLine();
		
		System.out.print("�˻��� > ");
		searchWord = scan.nextLine();
	}
	
}