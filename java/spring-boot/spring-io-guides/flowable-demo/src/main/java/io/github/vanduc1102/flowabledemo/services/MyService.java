package io.github.vanduc1102.flowabledemo.services;

import io.github.vanduc1102.flowabledemo.entities.Person;
import io.github.vanduc1102.flowabledemo.respositories.PersonRepository;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.PostConstruct;
import org.flowable.engine.RuntimeService;
import org.flowable.engine.TaskService;
import org.flowable.engine.runtime.ProcessInstance;
import org.flowable.task.api.Task;
import org.springframework.stereotype.Service;

@Service
public class MyService {
  private final RuntimeService runtimeService;
  private final TaskService taskService;
  private final PersonRepository personRepository;

  public MyService(
      RuntimeService runtimeService, TaskService taskService, PersonRepository personRepository) {
    this.runtimeService = runtimeService;
    this.taskService = taskService;
    this.personRepository = personRepository;
  }

  public String startProcess(String assignee) {
    Person person = personRepository.findByUsername(assignee);
    if (person == null) {

      return null;
    }
    Map<String, Object> variables = new HashMap<>();
    variables.put("person", person);
    ProcessInstance processInstance =
        runtimeService.startProcessInstanceByKey("oneTaskProcess", variables);
    return processInstance.getId();
  }

  public List<Task> getTasks(String assignee) {
    return taskService.createTaskQuery().taskAssignee(assignee).list();
  }

  @PostConstruct
  public void createDemoUser() {
    if (personRepository.findAll().size() == 0) {
      personRepository.save(new Person("duke", "Duke", "Nguyen", new Date()));
      personRepository.save(new Person("teresa", "Teresa", "Tran", new Date()));
      personRepository.save(new Person("toro", "Toro", "Nguyen", new Date()));
    }
  }
}
